import Container from "@/components/ui/container";
import img from "@/assets/images/404.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { MoveLeft } from "lucide-react";

const Error = () => {
  return (
    <>
      <Container>
        <div className="flex gap-16 justify-center h-full items-center">
          <div className="w-[430px]">
            <p className="font-extrabold text-4xl">Страница не найдена</p>
            <p className="font-normal text-lg text-gray-400 mt-4">
              Проверьте корректность введённого адреса или повторите попытку
              позже
            </p>
            <div className="flex items-center mt-11 gap-5">
              <Button variant={"outline"} className="rounded-[12px]">
                <MoveLeft />
                <Link to={"/"}>На главную</Link>
              </Button>
              <Button
              className=""
                variant={"ghost"}
                onClick={() => window.location.reload()}
              >
                Обновить
              </Button>
            </div>
          </div>
          <img src={img} alt="404" />
        </div>
      </Container>
    </>
  );
};

export default Error;
