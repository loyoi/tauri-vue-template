use tauri_plugin_log::{Target, TargetKind};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let log_targets = if cfg!(debug_assertions) {
        // 开发环境：日志输出到 stdout
        vec![Target::new(TargetKind::Stdout)]
    } else {
        // 生产环境：日志输出到文件
        vec![Target::new(TargetKind::LogDir { file_name: None })]
    };

    let mylog = tauri_plugin_log::Builder::new()
        .targets(log_targets)
        .level(log::LevelFilter::Info)
        .level_for("tao", log::LevelFilter::Off)
        .level_for("sqlx::query", log::LevelFilter::Off);

    tauri::Builder::default()
        .plugin(mylog.build())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        // .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
