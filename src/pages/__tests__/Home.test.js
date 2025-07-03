import { render, screen } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useProductsData", () => ({
    useProductsData: () => ({
        visibleProducts: [],
        setVisibleProducts: jest.fn(),
        loading: false,
        error: null,
        isDone: false,
        handleLoadMore: jest.fn(),
    }),
}));

test("Home 컴포넌트가 정상 렌더링된다", () => {

    render(
        <QueryClientProvider client={new QueryClient()}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </QueryClientProvider>
    );
    expect(screen.getByText("정렬")).toBeInTheDocument();
});
