import React from "react";
import Home from "../pages/home/";
import renderWithRouter from "../renderWithRouter";

describe("Testing Home Page", () => {
  test("should render gif", () => {
    const { getByAltText } = renderWithRouter(<Home />);

    const logo = getByAltText(/globo do mundo com um aviao sobrevoando/i);

    expect(logo).toBeInTheDocument();
  });

  test("should render headings", () => {
    const { getByText } = renderWithRouter(<Home />);

    const firstTitle = getByText(/Bem Vindo ao/i);
    const secondTitle = getByText(/Então não perca tempo e/i);

    expect(firstTitle).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
  });

  test("should render P's", () => {
    const { getByText } = renderWithRouter(<Home />);

    const firstP = getByText(/Com nosso aplicativo, você será/i);
    const secondP = getByText(/Além de salvar seus CEP'p/i);
    const thirdP = getByText(/Se estiver perdido, se estiver procurando/i);

    expect(firstP).toBeInTheDocument();
    expect(secondP).toBeInTheDocument();
    expect(thirdP).toBeInTheDocument();
  });
});
