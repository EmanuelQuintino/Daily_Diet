import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { Button } from "@components/Button";
import { ContainerModal, TitleModal, BoxButton } from "./styles";

type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
  handleDeleteMeal: () => void;
};

export function ModalDelete({
  isModalVisible,
  toggleModal,
  handleDeleteMeal,
}: Props) {
  return (
    <Modal isVisible={isModalVisible} animationIn={"fadeIn"}>
      <ContainerModal>
        <TitleModal>
          Deseja realmente excluir o registro da refeição?
        </TitleModal>
        <BoxButton>
          <View style={{ flex: 1 }}>
            <Button type="SECONDARY" name="Cancaler" onPress={toggleModal} />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              type="PRIMARY"
              name="Sim, excluir"
              onPress={handleDeleteMeal}
            />
          </View>
        </BoxButton>
      </ContainerModal>
    </Modal>
  );
}
