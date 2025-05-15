import { cn } from "@/lib/utils";

interface ImageBlockProps {
  className?: string;
  classNameImg?: string;
  img: string;
  alt?: string;
  imgSetting?: (arg: boolean) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  className,
  classNameImg,
  img,
  alt,
  imgSetting,
}) => {
  return (
    <>
      <div
        className={cn("bg-[#FFF7EE] px-9 py-6 rounded-2xl block", className)}
      >
        <img
          src={img}
          alt={alt}
          className={cn("w-[210px] h-[212px]", classNameImg)}
          onLoad={() => imgSetting?.(false)}
        />
      </div>
    </>
  );
};

export default ImageBlock;
