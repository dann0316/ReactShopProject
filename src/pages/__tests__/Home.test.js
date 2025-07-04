import { render, screen } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useProductsData } from "../../hooks/useProductsData";

// useProductsData를 mock 함수로 따로 지정
jest.mock("../../hooks/useProductsData", () => ({
    useProductsData: jest.fn(),
}));

const renderWithProviders = (ui) => {
    return render(
        <QueryClientProvider client={new QueryClient()}>
            <BrowserRouter>{ui}</BrowserRouter>
        </QueryClientProvider>
    );
};

describe("Home 컴포넌트", () => {
    test("정상 렌더링된다", () => {
        useProductsData.mockReturnValue({
            visibleProducts: [],
            setVisibleProducts: jest.fn(),
            loading: false,
            error: null,
            isDone: false,
            handleLoadMore: jest.fn(),
        });

        renderWithProviders(<Home />);
        expect(screen.getByText("정렬")).toBeInTheDocument();
    });

    test("에러 상태에서는 ErrorMessage 컴포넌트가 렌더링된다", () => {
        useProductsData.mockReturnValue({
            visibleProducts: [],
            setVisibleProducts: jest.fn(),
            loading: false,
            error: new Error("에러 발생!"),
            isDone: false,
            handleLoadMore: jest.fn(),
        });

        renderWithProviders(<Home />);
        expect(screen.getByText(/에러|error/i)).toBeInTheDocument();
    });
});
