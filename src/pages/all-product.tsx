import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core/dist/hooks";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { ProductCard, CustomButton } from "components";

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            Todos los Productos
          </Typography>
          <CustomButton 
            title="Agregar Producto"
            handleClick={() => navigate('/products/create')}
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add />}
          />
      </Stack>
    </Box>
  )
}

export default AllProducts