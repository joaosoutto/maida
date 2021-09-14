import React from "react";
import Header from "../components/header";
import renderWithRouter from "../renderWithRouter";

describe("Testing Header Component", () => {
  test("should render logo", () => {
    const { getByAltText } = renderWithRouter(<Header />);

    const logo = getByAltText(/Point me cover logo/i);

    expect(logo).toBeInTheDocument();
  });

  test("should render links", () => {
    const { getByText } = renderWithRouter(<Header />);

    const searchLink = getByText(/buscar cep/i);
    const favLink = getByText(/favoritos/i);

    expect(searchLink).toBeInTheDocument();
    expect(favLink).toBeInTheDocument();
  });
});
