-- SQL Schema for LifeSOC

-- 1. Tags Table
CREATE TABLE public.tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#3b82f6',
    currency_mapping TEXT[] DEFAULT '{}', -- Maps to the 8 currencies
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, name)
);

-- 2. Events (Timetable) Table
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    is_recurring BOOLEAN DEFAULT false,
    recurrence_pattern TEXT, -- e.g., 'weekly-monday'
    actual_duration_minutes INTEGER, -- For tracking actual time spent
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Event Tags (Many-to-Many)
CREATE TABLE public.event_tags (
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (event_id, tag_id)
);

-- 4. Habits Table
CREATE TABLE public.habits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    frequency TEXT DEFAULT 'daily', -- 'daily', 'weekly'
    goal_value INTEGER DEFAULT 1,
    unit TEXT DEFAULT 'count', -- 'count', 'minutes', 'ml', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Habit Tags (Many-to-Many)
CREATE TABLE public.habit_tags (
    habit_id UUID REFERENCES public.habits(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (habit_id, tag_id)
);

-- 6. Habit Logs
CREATE TABLE public.habit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    habit_id UUID REFERENCES public.habits(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    completed_at DATE NOT NULL DEFAULT CURRENT_DATE,
    value INTEGER DEFAULT 1,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(habit_id, completed_at)
);

-- Enable RLS
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.habit_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.habit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access their own tags" ON public.tags FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can only access their own events" ON public.events FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can only access their own event_tags" ON public.event_tags FOR ALL USING (
    EXISTS (SELECT 1 FROM public.events WHERE id = event_id AND user_id = auth.uid())
);
CREATE POLICY "Users can only access their own habits" ON public.habits FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can only access their own habit_tags" ON public.habit_tags FOR ALL USING (
    EXISTS (SELECT 1 FROM public.habits WHERE id = habit_id AND user_id = auth.uid())
);
CREATE POLICY "Users can only access their own habit_logs" ON public.habit_logs FOR ALL USING (auth.uid() = user_id);
