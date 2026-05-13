import Image, {ImageProps} from "next/image";
import React, {FC} from "react";

type CustomImageProps = Omit<ImageProps, "alt"> & {
    title: string | undefined;
};

const CustomImage: FC<CustomImageProps> = ({
                                               src,
                                               title,
                                               quality = 75,
                                               unoptimized = true,
                                               priority,
                                               loading,
                                               ...rest
                                           }) => {
    const imageLoading = priority ? undefined : loading;

    return (
        <Image
            src={src || "/assets/no-image.webp"}
            alt={title ?? "custom"}
            title={title}
            quality={quality}
            unoptimized={unoptimized}
            priority={priority}
            loading={imageLoading}
            {...rest}
        />
    );
};

export default CustomImage;