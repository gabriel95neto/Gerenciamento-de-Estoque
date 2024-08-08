import { Dialog, DialogActions, DialogTitle, Skeleton, Slide } from "@mui/material";
import { useSuppliers } from "../../../hooks/useCategoriesAndSuppliers";
import { Button } from "../../components/Button";
import { DataGridComponent } from "./components/DataGridComponent";
import { useDashBoardController } from "./useDashboardController";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Dashboard() {
  const { data, handleNewProduct, isFetching, open, handleClickOpen, handleClose, removeProduct } = useDashBoardController();

  const { data: dataSupplier, isFetching: isFetchingSupplier} = useSuppliers();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#1C1D22] text-2xl sm:text-4xl items-center font-black leading-tight tracking-[-0.033em] min-w-72">Gestão de inventário</p>
        <Button className="h-9 sm:h-10 bg-gray-300 hover:bg-gray-200 text-black" onClick={handleNewProduct}>Novo Produto</Button>
      </div>   
      
      <div className="flex flex-1 gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#D5D6DD] bg-[#FFFFFF] p-4 flex-col">
                <div className="text-[#1C1D22]" data-icon="Truck" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1C1D22] text-base font-bold leading-tight">Pedidos</h2>
                  {isFetching ? (
                    <Skeleton variant="text" animation="pulse" width={120} height={30} />
                  ): (
                    <p className="text-[#3C3F4A] text-sm font-normal leading-normal">{data?.length} nos últimos 7 dias</p>
                  )}
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#D5D6DD] bg-[#FFFFFF] p-4 flex-col">
                <div className="text-[#1C1D22]" data-icon="Money" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1C1D22] text-base font-bold leading-tight">Fornecedores</h2>
                  {isFetchingSupplier ? (
                    <Skeleton variant="text" animation="pulse" width={100} height={30} />
                  ) : (
                    <p className="text-[#3C3F4A] text-sm font-normal leading-normal">{dataSupplier?.length}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#D5D6DD] bg-[#FFFFFF] p-4 flex-col">
                <div className="text-[#1C1D22]" data-icon="List" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#1C1D22] text-base font-bold leading-tight">Estoque</h2>
                  <p className="text-[#3C3F4A] text-sm font-normal leading-normal">1,200 items</p>
                </div>
              </div>
      </div>
      <div className="p-4">
        <DataGridComponent isLoading={isFetching} rows={data} onHandleClickOpen={handleClickOpen} />
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
           <DialogTitle>{"Tem certeza que deseja remover o produto?"}</DialogTitle>
        <DialogActions>
          <Button onClick={removeProduct}>Sim</Button>
          <Button onClick={handleClose}>Não</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  )
}

