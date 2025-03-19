-- Enable row level security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can insert their own profile" ON users;
DROP POLICY IF EXISTS "Users can view their own profile" ON users;
DROP POLICY IF EXISTS "Users can update their own profile" ON users;

-- Create policies that allow users to manage their own profile
CREATE POLICY "Users can insert their own profile"
ON users FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view their own profile"
ON users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON users FOR UPDATE
USING (auth.uid() = id);

-- Create a policy for public access to users table
DROP POLICY IF EXISTS "Public access to users" ON users;
CREATE POLICY "Public access to users"
ON users FOR SELECT
USING (true);
