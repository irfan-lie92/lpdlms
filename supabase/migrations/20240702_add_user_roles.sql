-- Add role column to users table if it doesn't exist
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS role text DEFAULT 'student';

-- Create index on role column
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);

-- Update RLS policies to allow admin access
DROP POLICY IF EXISTS "Allow full access to admins" ON public.users;
CREATE POLICY "Allow full access to admins"
  ON public.users
  USING (auth.uid() IN (SELECT id FROM public.users WHERE role = 'admin'));

-- Create admin user function
CREATE OR REPLACE FUNCTION make_user_admin(user_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE public.users
  SET role = 'admin'
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Create instructor user function
CREATE OR REPLACE FUNCTION make_user_instructor(user_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE public.users
  SET role = 'instructor'
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;
