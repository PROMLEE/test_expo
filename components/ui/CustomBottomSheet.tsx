import React, { useCallback } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

interface BottomSheetProps {
  bottomSheetModalRef: React.RefObject<BottomSheet>;
  component: React.ReactNode;
  snapPoints?: string[];
  [key: string]: any;
}

const CustomBottomSheet: React.FC<BottomSheetProps> = ({
  bottomSheetModalRef,
  component,
  snapPoints = ["40%"],
  ...props
}) => {
  const renderBackdrop = useCallback(
    (backdropProps: any) => (
      <BottomSheetBackdrop
        {...backdropProps}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      style={{
        zIndex: 10,
        elevation: 10,
      }}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      {...props}
    >
      <BottomSheetView style={{ flex: 1 }}>{component}</BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
