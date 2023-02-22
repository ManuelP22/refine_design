import { Box, typography, Stack } from "@mui/system"
import { useList } from "@pankod/refine-core/dist/hooks"
import { Typography } from "@pankod/refine-mui"

import {
  PieChart,
  ProductReferrals,
  TotalRevenue,
  ProductCard,
  TopAgent,
} from 'components'

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Productos en ventas"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />

        <PieChart 
          title="Productos en Stock"
          value={550}
          series={[60, 40]}
          colors={['#FD8539', '#e4e8ef']}
        />

        <PieChart 
          title="Clientes Totales"
          value={5804}
          series={[75, 25]}
          colors={['#2ED480', '#e4e8ef']}
        />

        <PieChart 
          title="Productos por sucursal"
          value={17000}
          series={[75, 25]}
          colors={['#FE6D8E', '#e4e8ef']}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <ProductReferrals />
      </Stack>
    </Box>
  )
}

export default home