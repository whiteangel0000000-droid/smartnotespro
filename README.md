# SmartNotesPro (Android APK)

Offline-first smart notes Android application with live inline math evaluation, rich text formatting, checklists, voice notes, handwriting drawings, CSV/PDF local backup & restore, and PIN/Fingerprint vault protection.

## Automatic APK Build on GitHub

1. Push this repository to GitHub (`main` or `master` branch).
2. Open the **Actions** tab in your GitHub repository.
3. Wait for **Build Android APK** to finish (or trigger it manually via **Run workflow**).
4. Download the **SmartNotesPro-Android-APK** artifact (`SmartNotesPro-debug.apk`) and install it on your Android phone.

## Local Android APK Build

Prerequisites: Node.js 22+, Java 21 (JDK 21), and Android SDK (`compileSdk 36`).

```bash
npm install
npm run android:apk
```

The generated APK will be at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```
