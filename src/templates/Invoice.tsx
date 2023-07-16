import * as React from "react";
import { Col, Container, Row, Visible } from "react-grid-system";
import { styled } from "styled-components";
import { HorizontalSpacer } from "../components/Spacers";
import { Invoice as InvoiceModel } from "../models";
import { getInvoice, updateInvoice } from "../api";
import TextInput from "../components/TextInput";
import { EditIcon } from "../components/icons/Edit";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Title = styled.h1`
  font-size: 42px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const AddressSection = styled.div`
  padding: 1rem;
  border-radius: 24px;
  border: 3px solid #ead06a;
  max-width: 800px;
`;

interface PageContext {
  slug: string;
}

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #354965;
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    filter: opacity(0.6);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #354965;
  background-color: white;
  cursor: pointer;

  :hover {
    filter: opacity(0.6);
  }
`;

const initialInvoiceData: InvoiceModel = {
  created_at: new Date(),
  customer_address: "",
  customer_city: "",
  customer_country: "",
  customer_name: "",
  customer_zip: "",
  delivery_address: "",
  delivery_city: "",
  delivery_country: "",
  delivery_name: "",
  delivery_zip: "",
  due_date: new Date(),
  id: 0,
  invoice_date: new Date(),
  ocr: 0,
};

const Invoice: React.FC<{ pageContext: PageContext }> = ({ pageContext }) => {
  const { slug } = pageContext;

  const [myInvoice, setInvoice] = React.useState<
    { data: InvoiceModel } | undefined
  >();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvoice(slug);
        setInvoice(data);
        setUpdatedInvoice(data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [updatedInvoice, setUpdatedInvoice] =
    React.useState<InvoiceModel>(initialInvoiceData);

  const handleChangeInvoice = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setUpdatedInvoice((values: any) => ({ ...values, [name]: value }));
  };

  const onSuccess = () => setIsEditing(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("adress: ", updatedInvoice);
    updateInvoice(myInvoice?.data.id ?? "error", updatedInvoice, onSuccess);
  };

  return (
    <main style={pageStyles}>
      <div>
        <Container>
          <HorizontalSpacer spacing={2} />
          <Title>Faktura {slug}</Title>
          <HorizontalSpacer spacing={2} />
          <Row align="center">
            <Col md={3}>
              <InfoSection>
                <Subtitle>Fakturanummer:</Subtitle>
                <Text>{myInvoice?.data.id}</Text>
              </InfoSection>
            </Col>
            <Col md={3}>
              <InfoSection>
                <Subtitle>Fakturadatum:</Subtitle>
                <Text>{myInvoice?.data.invoice_date.toLocaleString()}</Text>
              </InfoSection>
            </Col>
            <Col md={3}>
              <InfoSection>
                <Subtitle>Förfallodatum:</Subtitle>
                <Text>{myInvoice?.data.due_date.toLocaleString()}</Text>
              </InfoSection>
            </Col>
            <Col md={3}>
              <InfoSection>
                <Subtitle>OCR:</Subtitle>
                <Text>{myInvoice?.data.ocr}</Text>
              </InfoSection>
            </Col>
          </Row>
          <HorizontalSpacer spacing={2} />
          <AddressSection>
            <div>
              <form onSubmit={onSubmit}>
                <Row
                  justify="between"
                  align="center"
                  style={{ padding: "0 15px" }}
                >
                  <Subtitle>Fakturaadress</Subtitle>
                  {isEditing ? (
                    <Button type="submit">Spara</Button>
                  ) : (
                    <IconButton onClick={() => setIsEditing(true)}>
                      <EditIcon />
                    </IconButton>
                  )}
                </Row>
                <HorizontalSpacer spacing={1} />
                <TextInput
                  textFieldTitle="Namn"
                  defaultValue={myInvoice?.data.customer_name}
                  disabled={!isEditing}
                  name="customer_name"
                  id="customer_name"
                  onChange={handleChangeInvoice}
                />
                <HorizontalSpacer spacing={1} />
                <TextInput
                  textFieldTitle="Adress"
                  defaultValue={myInvoice?.data.customer_address}
                  disabled={!isEditing}
                  name="customer_address"
                  id="customer_address"
                  onChange={handleChangeInvoice}
                />
                <HorizontalSpacer spacing={1} />
                <Row>
                  <Col md={6}>
                    <TextInput
                      textFieldTitle="Stad"
                      defaultValue={myInvoice?.data.customer_city}
                      disabled={!isEditing}
                      name="customer_city"
                      id="customer_city"
                      onChange={handleChangeInvoice}
                    />
                  </Col>
                  <Col md={6}>
                    <Visible xs>
                      <HorizontalSpacer spacing={1} />
                    </Visible>
                    <TextInput
                      textFieldTitle="Postnummer"
                      defaultValue={myInvoice?.data.customer_zip}
                      disabled={!isEditing}
                      name="customer_zip"
                      id="customer_zip"
                      onChange={handleChangeInvoice}
                    />
                  </Col>
                </Row>
              </form>
            </div>
          </AddressSection>
        </Container>
      </div>
    </main>
  );
};

export default Invoice;
