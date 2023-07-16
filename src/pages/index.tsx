import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { Col, Container, Row } from "react-grid-system";
import { Invoice } from "../models";
import { ArrowRightIcon } from "../components/icons/ArrowRight";
import { styled } from "styled-components";
import { MediaQuery, isEvenNumber } from "../helpers";
import { HorizontalSpacer } from "../components/Spacers";
import { getInvoices } from "../api";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const HeaderRow = styled(Row)`
  background-color: #ead06a;
  padding: 1rem;
  color: white;
  font-weight: 700;
  border-radius: 24px;
  font-size: 18px;

  ${MediaQuery.XS} {
    padding: 0.5rem;
  }
`;

const InvoiceRow = styled(Row)<{ secondary: boolean }>`
  padding: 1rem;
  background-color: ${(props) => (props.secondary ? "#fbfbfb" : "#f1f1f1")};
  border-radius: 24px;
  margin: 8px 0;

  ${MediaQuery.XS} {
    padding: 0.5rem;
  }
`;

const InvoiceRowContent = styled.div`
  cursor: pointer;
  :hover {
    background-color: #ffd687;
  }
`;

const Title = styled.h1`
  font-size: 42px;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [invoices, setInvoices] = React.useState<
    { data: Invoice[]; pagination: any } | undefined
  >();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvoices();
        setInvoices(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error, could not fetch the invoices</div>;
  }

  return (
    <main style={pageStyles}>
      <Container>
        <HorizontalSpacer spacing={2} />
        <Title>Fakturor</Title>
        <HorizontalSpacer spacing={2} />

        <HeaderRow>
          <Col md={1} xs={1}>
            Id
          </Col>
          <Col md={3} xs={3}>
            Kundnamn
          </Col>
          <Col md={3} xs={3}>
            Fakturadatum
          </Col>
          <Col md={3} xs={3}>
            Förfallodatum
          </Col>
        </HeaderRow>
        <div>
          {invoices?.data?.map((invoice: Invoice, index: number) => (
            <InvoiceRowContent key={invoice.id}>
              <MyLink to={`/invoice/${invoice.id}`}>
                <InvoiceRow align="center" secondary={isEvenNumber(index)}>
                  <Col md={1} xs={1}>
                    {invoice.id}
                  </Col>
                  <Col md={3} xs={3}>
                    {invoice.customer_name}
                  </Col>
                  <Col md={3} xs={3}>
                    {invoice.invoice_date.toLocaleString()}
                  </Col>
                  <Col md={3} xs={3}>
                    {invoice.due_date.toLocaleString()}
                  </Col>
                  <Col
                    md={2}
                    xs={1}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <ArrowRightIcon />
                  </Col>
                </InvoiceRow>
              </MyLink>
            </InvoiceRowContent>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fakturor</title>;
