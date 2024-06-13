import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Users from "@/app/users/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("User page", () => {
  test("renders users fetched from API", async () => {
    const mockUsers = [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
      { id: 3, name: "Clementine Bauch" }
    ];

    const queryClient = new QueryClient();
    queryClient.setQueryData(["users"], mockUsers);

    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );

    // Await for users to appear in the document
    await screen.findByText("Leanne Graham");
    await screen.findByText("Ervin Howell");
    await screen.findByText("Clementine Bauch");

    // Assert that each user's name is present in the document
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
    expect(screen.getByText("Clementine Bauch")).toBeInTheDocument();
  });
});