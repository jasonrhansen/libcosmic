// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

use cosmic::{
    iced_native::window,
    iced::widget::{
        column, container, horizontal_space, pick_list, progress_bar, radio, row, slider, checkbox, text,
    },
    iced::{self, Alignment, Application, Command, Length},
    iced_lazy::responsive,
    iced_winit::window::{close, drag, toggle_maximize, minimize},
    theme::{self, Theme},
    widget::{button, icon, list, nav_bar, nav_button, header_bar, settings, scrollable, toggler, spin_button::{SpinButtonModel, SpinMessage}},
    Element,
    ElementExt,
};
use std::vec;
use theme::Button as ButtonTheme;

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub enum DesktopPage {
    Root,
    DesktopOptions,
    Wallpaper,
    Appearance,
    DockAndTopPanel,
    Workspaces,
    Notifications,
}

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub enum Page {
    Demo,
    WiFi,
    Networking,
    Bluetooth,
    Desktop(DesktopPage),
    InputDevices,
    Displays,
    PowerAndBattery,
    Sound,
    PrintersAndScanners,
    PrivacyAndSecurity,
    SystemAndAccounts,
    UpdatesAndRecovery,
    TimeAndLanguage,
    Accessibility,
    Applications,
}

impl Default for Page {
    fn default() -> Page {
        //TODO: what should the default page be?
        Page::Desktop(DesktopPage::Root)
    }
}

#[derive(Default)]
pub struct Window {
    title: String,
    page: Page,
    debug: bool,
    theme: Theme,
    slider_value: f32,
    spin_button: SpinButtonModel<i32>,
    checkbox_value: bool,
    toggler_value: bool,
    pick_list_selected: Option<&'static str>,
    sidebar_toggled: bool,
    sidebar_toggled_condensed: bool,
    show_minimize: bool,
    show_maximize: bool,
}

impl Window {
    pub fn sidebar_toggled(mut self, toggled: bool) -> Self {
        self.sidebar_toggled = toggled;
        self
    }

    pub fn show_maximize(mut self, show: bool) -> Self {
        self.show_maximize = show;
        self
    }

    pub fn show_minimize(mut self, show: bool) -> Self {
        self.show_minimize = show;
        self
    }
}

#[allow(dead_code)]
#[derive(Clone, Copy, Debug)]
pub enum Message {
    Page(Page),
    Debug(bool),
    ThemeChanged(Theme),
    ButtonPressed,
    SliderChanged(f32),
    CheckboxToggled(bool),
    TogglerToggled(bool),
    PickListSelected(&'static str),
    RowSelected(usize),
    Close,
    ToggleSidebar,
    ToggleSidebarCondensed,
    Drag,
    Minimize,
    Maximize,
    InputChanged,
    SpinButton(SpinMessage)
}

impl Window {
    fn view_demo(&self) -> Element<Message> {
        let choose_theme = [Theme::Light, Theme::Dark].iter().fold(
            row![].spacing(10).align_items(Alignment::Center),
            |row, theme| {
                row.push(radio(
                    format!("{:?}", theme),
                    *theme,
                    Some(self.theme),
                    Message::ThemeChanged,
                ))
            },
        );

        settings::view_column(vec![
            text("Demo").size(32).into(),
            settings::view_section("Debug")
                .add(settings::item("Debug theme", choose_theme))
                .add(settings::item(
                    "Debug layout",
                    toggler(String::from("Debug layout"), self.debug, Message::Debug)
                ))
                .into(),
            settings::view_section("Buttons")
                .add(settings::item_row(vec![
                    button(ButtonTheme::Primary)
                        .text("Primary")
                        .on_press(Message::ButtonPressed)
                        .into(),
                    button(ButtonTheme::Secondary)
                        .text("Secondary")
                        .on_press(Message::ButtonPressed)
                        .into(),
                    button(ButtonTheme::Positive)
                        .text("Positive")
                        .on_press(Message::ButtonPressed)
                        .into(),
                    button(ButtonTheme::Destructive)
                        .text("Destructive")
                        .on_press(Message::ButtonPressed)
                        .into(),
                    button(ButtonTheme::Text)
                        .text("Text")
                        .on_press(Message::ButtonPressed)
                        .into()
                ]))
                .add(settings::item_row(vec![
                    button(ButtonTheme::Primary).text("Primary").into(),
                    button(ButtonTheme::Secondary).text("Secondary").into(),
                    button(ButtonTheme::Positive).text("Positive").into(),
                    button(ButtonTheme::Destructive).text("Destructive").into(),
                    button(ButtonTheme::Text).text("Text").into(),
                ]))
                .into(),
            settings::view_section("Controls")
                .add(settings::item("Toggler", toggler(None, self.toggler_value, Message::TogglerToggled)))
                .add(settings::item(
                    "Pick List (TODO)",
                    pick_list(
                        vec!["Option 1", "Option 2", "Option 3", "Option 4",],
                        self.pick_list_selected,
                        Message::PickListSelected
                    )
                    .padding([8, 0, 8, 16])
                ))
                .add(settings::item(
                    "Slider",
                    slider(0.0..=100.0, self.slider_value, Message::SliderChanged)
                        .width(Length::Units(250))
                ))
                .add(settings::item(
                    "Progress",
                    progress_bar(0.0..=100.0, self.slider_value)
                        .width(Length::Units(250))
                        .height(Length::Units(4))
                ))
                .add(settings::item_row(vec![
                    checkbox("Checkbox", self.checkbox_value, Message::CheckboxToggled).into()
                ]))
                .add(settings::item(
                    format!("Spin Button (Range {}:{})", self.spin_button.min, self.spin_button.max),
                    self.spin_button.view(Message::SpinButton),
                ))
                .into()
        ])
        .into()
    }

    fn view_desktop_root(&self) -> Element<Message> {
        //TODO: rename and move to libcosmic
        let desktop_page_button = |icon_name, title, description, desktop_page| {
            iced::widget::Button::new(
                container(settings::item_row(vec![
                    icon(icon_name, 20).style(theme::Svg::Symbolic).into(),
                    column!(
                        text(title).size(18),
                        text(description).size(12),
                    ).spacing(2).into(),
                    horizontal_space(iced::Length::Fill).into(),
                    icon("go-next-symbolic", 20).style(theme::Svg::Symbolic).into(),
                ]).spacing(16))
                .padding([20, 24])
                .style(theme::Container::Custom(list::column::style))
            )
            .padding(0)
            .style(theme::Button::Transparent)
            .on_press(Message::Page(Page::Desktop(desktop_page)))
        };

        settings::view_column(vec![
            text("Desktop").size(30).into(),

            //TODO: simplify these buttons!
            column!(
                desktop_page_button(
                    "video-display-symbolic",
                    "Desktop Options",
                    "Super Key action, hot corners, window control options.",
                    DesktopPage::DesktopOptions
                ),

                desktop_page_button(
                    "preferences-desktop-wallpaper-symbolic",
                    "Wallpaper",
                    "Background images, colors, and slideshow options.",
                    DesktopPage::Wallpaper
                ),

                desktop_page_button(
                    "preferences-pop-desktop-appearance-symbolic",
                    "Appearance",
                    "Accent colors and COSMIC theming",
                    DesktopPage::Appearance
                ),

                desktop_page_button(
                    "preferences-pop-desktop-dock-symbolic",
                    "Dock & Top Panel",
                    "Customize size, positions, and more for Dock and Top Panel.",
                    DesktopPage::DockAndTopPanel
                ),

                desktop_page_button(
                    "preferences-pop-desktop-workspaces-symbolic",
                    "Workspaces",
                    "Set workspace number, behavior, and placement.",
                    DesktopPage::Workspaces
                ),

                desktop_page_button(
                    "preferences-system-notifications-symbolic",
                    "Notifications",
                    "Do Not Disturb, lockscreen notifications, and per-application settings.",
                    DesktopPage::Notifications
                ),
            ).spacing(16).into()
        ])
        .into()
    }

    fn view_desktop_options(&self) -> Element<Message> {
        settings::view_column(vec![
            column!(
                iced::widget::Button::new(row!(
                    icon("go-previous-symbolic", 16).style(theme::Svg::SymbolicLink),
                    text("Desktop").size(16),
                ))
                .padding(0)
                .style(theme::Button::Link)
                .on_press(Message::Page(Page::Desktop(DesktopPage::Root))),
                text("Desktop Options").size(32),
            )
            .spacing(10)
            .into(),

            settings::view_section("Super Key Action")
                .add(settings::item("TODO", toggler(None, self.toggler_value, Message::TogglerToggled)))
                .into(),

            settings::view_section("Hot Corner")
                .add(settings::item("Enable top-left hot corner for Workspaces", toggler(None, self.toggler_value, Message::TogglerToggled)))
                .into(),

            settings::view_section("Top Panel")
                .add(settings::item("Show Workspaces Button", toggler(None, self.toggler_value, Message::TogglerToggled)))
                .add(settings::item("Show Applications Button", toggler(None, self.toggler_value, Message::TogglerToggled)))
                .into(),
        ]).into()
    }
}

impl Application for Window {
    type Executor = iced::executor::Default;
    type Flags = ();
    type Message = Message;
    type Theme = Theme;

    fn new(_flags: ()) -> (Self, Command<Self::Message>) {
        let mut window = Window::default()
            .sidebar_toggled(true)
            .show_maximize(true)
            .show_minimize(true);
        window.slider_value = 50.0;
        //        window.theme = Theme::Light;
        window.pick_list_selected = Some("Option 1");
        window.title = String::from("COSMIC Design System - Iced");
        window.spin_button.min = -10;
        window.spin_button.max = 10;
        (window, Command::none())
    }

    fn title(&self) -> String {
        self.title.clone()
    }

    fn update(&mut self, message: Message) -> iced::Command<Self::Message> {
        match message {
            Message::Page(page) => {
                self.sidebar_toggled_condensed = false;
                self.page = page;
            },
            Message::Debug(debug) => self.debug = debug,
            Message::ThemeChanged(theme) => self.theme = theme,
            Message::ButtonPressed => {}
            Message::SliderChanged(value) => self.slider_value = value,
            Message::CheckboxToggled(value) => {
                self.checkbox_value = value;
            },
            Message::TogglerToggled(value) => self.toggler_value = value,
            Message::PickListSelected(value) => self.pick_list_selected = Some(value),
            Message::ToggleSidebar => self.sidebar_toggled = !self.sidebar_toggled,
            Message::ToggleSidebarCondensed => self.sidebar_toggled_condensed = !self.sidebar_toggled_condensed,
            Message::Drag => return drag(window::Id::new(0)),
            Message::Close => return close(window::Id::new(0)),
            Message::Minimize => return minimize(window::Id::new(0), true),
            Message::Maximize => return toggle_maximize(window::Id::new(0)),
            Message::RowSelected(row) => println!("Selected row {row}"),
            Message::InputChanged => {},
            Message::SpinButton(msg) => self.spin_button.update(msg),

        }

        Command::none()
    }

    fn view(&self) -> Element<Message> {
        // TODO: Adding responsive makes this regenerate on every size change, and regeneration
        // involves allocations for many different items. Ideally, we could only make the nav bar
        // responsive and leave the content to be sized normally.
        responsive(|size| {
            //TODO: send a message when this happens instead of having everything be recalculated on resize
            let condensed = size.width < 900.0;

            let (sidebar_message, sidebar_toggled) = if condensed {
                (Message::ToggleSidebarCondensed, self.sidebar_toggled_condensed)
            } else {
                (Message::ToggleSidebar, self.sidebar_toggled)
            };

            let mut header = header_bar()
                .title("COSMIC Design System - Iced")
                .on_close(Message::Close)
                .on_drag(Message::Drag)
                .start(
                    nav_button("Settings")
                        .on_sidebar_toggled(sidebar_message)
                        .sidebar_active(sidebar_toggled)
                        .into()
                );

            if self.show_maximize {
                header = header.on_maximize(Message::Maximize);
            }

            if self.show_minimize {
                header = header.on_minimize(Message::Minimize);
            }

            let header = Into::<Element<Message>>::into(header).debug(self.debug);

            let mut widgets = Vec::with_capacity(2);

            if sidebar_toggled {
                let mut sidebar = container(scrollable(column!(
                    cosmic::nav_button!("document-properties-symbolic", "Demo", self.page == Page::Demo)
                        .on_press(Message::Page(Page::Demo)),
                    cosmic::nav_button!("network-wireless-symbolic", "Wi-Fi", self.page == Page::WiFi)
                        .on_press(Message::Page(Page::WiFi)),
                    cosmic::nav_button!("network-workgroup-symbolic", "Networking", self.page == Page::Networking)
                        .on_press(Message::Page(Page::Networking)),
                    cosmic::nav_button!("bluetooth-active-symbolic", "Bluetooth", self.page == Page::Bluetooth)
                        .on_press(Message::Page(Page::Bluetooth)),
                    cosmic::nav_button!("video-display-symbolic", "Desktop", matches!(self.page, Page::Desktop(_)))
                        .on_press(Message::Page(Page::Desktop(DesktopPage::Root))),
                    cosmic::nav_button!("input-keyboard-symbolic", "Input Devices", self.page == Page::InputDevices)
                        .on_press(Message::Page(Page::InputDevices)),
                    cosmic::nav_button!("preferences-desktop-display-symbolic", "Displays", self.page == Page::Displays)
                        .on_press(Message::Page(Page::Displays)),
                    cosmic::nav_button!("battery-full-charged-symbolic", "Power & Battery", self.page == Page::PowerAndBattery)
                        .on_press(Message::Page(Page::PowerAndBattery)),
                    cosmic::nav_button!("multimedia-volume-control-symbolic", "Sound", self.page == Page::Sound)
                        .on_press(Message::Page(Page::Sound)),
                    cosmic::nav_button!("printer-symbolic", "Printers & Scanners", self.page == Page::PrintersAndScanners)
                        .on_press(Message::Page(Page::PrintersAndScanners)),
                    cosmic::nav_button!("preferences-system-privacy-symbolic", "Privacy & Security", self.page == Page::PrivacyAndSecurity)
                        .on_press(Message::Page(Page::PrivacyAndSecurity)),
                    cosmic::nav_button!("system-users-symbolic", "System & Accounts", self.page == Page::SystemAndAccounts)
                        .on_press(Message::Page(Page::SystemAndAccounts)),
                    cosmic::nav_button!("software-update-available-symbolic", "Updates & Recovery", self.page == Page::UpdatesAndRecovery)
                        .on_press(Message::Page(Page::UpdatesAndRecovery)),
                    cosmic::nav_button!("preferences-system-time-symbolic", "Time & Language", self.page == Page::TimeAndLanguage)
                        .on_press(Message::Page(Page::TimeAndLanguage)),
                    cosmic::nav_button!("preferences-desktop-accessibility-symbolic", "Accessibility", self.page == Page::Accessibility)
                        .on_press(Message::Page(Page::Accessibility)),
                    cosmic::nav_button!("preferences-desktop-apps-symbolic", "Applications", self.page == Page::Applications)
                        .on_press(Message::Page(Page::Applications)),
                ).spacing(14)))
                .height(Length::Fill)
                .padding(11)
                .style(theme::Container::Custom(nav_bar::nav_bar_sections_style));

                if ! condensed {
                    sidebar = sidebar.max_width(300)
                }

                let sidebar: Element<_> = sidebar.into();
                widgets.push(sidebar.debug(self.debug));
            }

            if ! (condensed && sidebar_toggled) {
                let content: Element<_> = match self.page {
                    Page::Demo => self.view_demo(),
                    Page::Desktop(DesktopPage::Root) => self.view_desktop_root(),
                    Page::Desktop(DesktopPage::DesktopOptions) => self.view_desktop_options(),
                    _ =>  settings::view_column(vec![
                        text("Unimplemented page").into()
                    ]).into(),
                };

                widgets.push(
                    scrollable(row![
                        horizontal_space(Length::Fill),
                        content.debug(self.debug),
                        horizontal_space(Length::Fill),
                    ])
                    .into(),
                );
            }

            let content = container(row(widgets))
                .padding([0, 8, 8, 8])
                .width(Length::Fill)
                .height(Length::Fill)
                .into();

            column(vec![header, content]).into()
        })
        .into()
    }

    fn theme(&self) -> Theme {
        self.theme
    }
}