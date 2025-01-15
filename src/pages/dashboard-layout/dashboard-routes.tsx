import { Route } from "@/interfaces/interfaces";
import { USERS_ROUTES } from "./users/users-routes";
import { QUESTIONS_ROUTES } from "./questions/question-routes";

export const DASHBOARD_ROUTES: Route[] = [...USERS_ROUTES, ...QUESTIONS_ROUTES];
