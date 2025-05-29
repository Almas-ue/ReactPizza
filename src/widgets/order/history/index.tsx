import Container from "@/components/ui/container";
import Header from "@/widgets/Header/Header";

const OrderHistory = () => {
  return (
    <>
      <Header lite={true} />
      <Container>
        <h2 className="mt-9 text-[46px] font-semibold">Мои заказы</h2>
      </Container>
    </>
  );
};

export default OrderHistory;
