// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use window_shadows::set_shadow;
use window_vibrancy::apply_acrylic;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hi, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "windows")]
            apply_acrylic(&window, Some((18, 18, 18, 180)))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

            #[cfg(target_os = "windows")]
            set_shadow(&window, true).unwrap();

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
