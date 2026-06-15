# LifeSOC Setup Instructions

To get your LifeSOC application fully operational, follow these steps:

## 1. Supabase Backend Setup
1. Create a new project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Copy the contents of `Supabase_Schema.sql` from this project and run it to set up your tables and security policies.
4. Go to **Project Settings -> API**.
5. Copy your **Project URL** and **Anon Key**.
6. Update your `.env.local` file with these values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## 2. Running the Application
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. PWA Installation
Since this is a Progressive Web App, you can install it on your device:
- **Desktop:** Click the install icon in the browser address bar.
- **Mobile:** Use "Add to Home Screen" from your mobile browser's menu.

## 4. Key Features
- **Timetable:** Schedule your week and track time.
- **Habits:** Monitor daily routines and streaks.
- **8 Currencies:** Analyze your life balance across Financial, Time, Attention, Trust, Relationship, Knowledge, Health, and Character.
- **PDF Reports:** Download a comprehensive analysis of your holistic progress.
