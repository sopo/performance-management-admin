export interface AuthProps {
  email: string;
  password: string;
  remember?: boolean;
}
export interface RegisterProps {
  email: string;
  password: string;
  name: string;
  subordinates: string;
  manager: string;
  role: string
}
export interface Route {
  path: string;
  element: React.ReactNode;
}
