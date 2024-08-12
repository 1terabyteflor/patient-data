import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size: number;
  roundedImg: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size, roundedImg }) => {
  const hasAvatar = !!src;

  return hasAvatar ? (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${roundedImg ? 'rounded-full' : 'rounded-none'}`}
    />
  ) : (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: '#063248',
      }}
      className={`flex items-center justify-center text-white ${roundedImg ? 'rounded-full' : 'rounded-none'}`}
    ></div>
  );
};

export default Avatar;
