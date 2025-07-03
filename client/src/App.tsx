import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import ProfileJudgePage from "@/pages/ProfileJudgePage";
import ProfileSettingsPage from "@/pages/ProfileSettingsPage";
import ProfileCalendarPage from "@/pages/ProfileCalendarPage";
import ProfileCreatePage from "@/pages/ProfileCreatePage";
import ProfileCalendarTrainingsPage from "@/pages/ProfileCalendarTrainingsPage";
import ProfileCalendarEventsPage from "@/pages/ProfileCalendarEventsPage";
import EventsPage from "@/pages/EventsPage";
import EventsCreatePage from "@/pages/EventsCreatePage";
import EventsLivePage from "@/pages/EventsLivePage";
import EventsCalendarPage from "@/pages/EventsCalendarPage";
import RankingPage from "@/pages/RankingPage";
import SubscriptionsPage from "@/pages/SubscriptionsPage";
import MapPage from "@/pages/MapPage";
import HelpPage from "@/pages/HelpPage";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/profile/judge" component={ProfileJudgePage} />
        <Route path="/profile/settings" component={ProfileSettingsPage} />
        <Route path="/profile/calendar" component={ProfileCalendarPage} />
        <Route path="/profile/create" component={ProfileCreatePage} />
        <Route path="/profile/calendar/trainings" component={ProfileCalendarTrainingsPage} />
        <Route path="/profile/calendar/my-events" component={ProfileCalendarEventsPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/events/create" component={EventsCreatePage} />
        <Route path="/events/live" component={EventsLivePage} />
        <Route path="/events/calendar" component={EventsCalendarPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/subscriptions" component={SubscriptionsPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
