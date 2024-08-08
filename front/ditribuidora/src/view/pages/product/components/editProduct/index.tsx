import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { Button } from "../../../../components/Button";
import { Controller,  } from "react-hook-form";
import { useEditProductController } from "./useEditProductController";
import { useEffect } from "react";


export function EditProduct() {

  const { errors, handleSubmit, register, control, reset, dataCategory, dataSupplier , useProductById} = useEditProductController();

  const {data} = useProductById();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);
  
  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mt-10 flex-col flex-wrap justify-between gap-8 p-4">
      <p className="text-[#1C1D22] tracking-light text-[32px] font-bold leading-tight min-w-72">Editar produto</p>
      <TextField 
        size="small" 
        label="Nome" 
        variant="outlined"
        error={!!errors.name}
        InputLabelProps={{ shrink: true }}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <FormControl fullWidth>
        <InputLabel size="small">Categoria</InputLabel>
        <Controller
          name="categoryId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              label="Categoria"
              size="small"
              error={!!errors.categoryId}
            >
              {dataCategory?.map(category => (
                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText className="!text-red-600">{errors.categoryId?.message}</FormHelperText>
      </FormControl>
      <TextField
          id="outlined-multiline-flexible"
          label="Descrição"
          multiline
          maxRows={4}
          error={!!errors.description }
          InputLabelProps={{ shrink: true }}
          helperText={errors.description?.message}
          {...register("description")}
        />
        <FormControl fullWidth error={!!errors.price}>
          <InputLabel htmlFor="outlined-adornment-amount" size="small">Preço</InputLabel>
          <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="outlined-adornment-amount"
              size="small"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Preço"
            />
          )}
        />
          <FormHelperText className="!text-red-600">{errors.price?.message}</FormHelperText>
        </FormControl>
        <TextField
          id="outlined-number"
          label="Estoque"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          helperText={errors.quantityStock?.message}
          error={!!errors.quantityStock}
          {...register("quantityStock")}
        />
        <FormControl fullWidth>
        <InputLabel size="small">Fornecedor</InputLabel>
        <Controller
          name="supplierId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              label="Fornecedor"
              size="small"
              error={!!errors.supplierId}
            >
              {dataSupplier?.map(category => (
                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText className="!text-red-600">{errors.supplierId?.message}</FormHelperText>
      </FormControl>
      <Button className="bg-gray-950 hover:bg-gray-700" onClick={handleSubmit}>Editar</Button>
    </form>
  )
}

