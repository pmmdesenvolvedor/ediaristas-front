import React from 'react';
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  const getNameInitials = (name: string): string => {
    let names = name.split(' ');
    let firstNameInitial = names.slice(0)[0][0];
    let lastNameInitial = names.slice(-1)[0][0];
    let initials = firstNameInitial + lastNameInitial;
    return initials;
  };

  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{getNameInitials(name)}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
