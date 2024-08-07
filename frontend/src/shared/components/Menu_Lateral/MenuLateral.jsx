import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';

export const MenuLateral = ({ children }) => {
  // DropDown Cadastro
  const [dropDownCadastro, setOpenCadastro] = useState(false);

  const DropCadastro = () => {
    setOpenCadastro(!dropDownCadastro);
  };

  // Criação do DropDown 
  // Essa variável vai pegar todas as propriedades do Tema principal aplicado.
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent' sx={{ '& .MuiDrawer-paper': { border: 'none' } }}>
        <Box width={theme.spacing(28)} height='100%' flex={1} display='flex' flexDirection='column'>
          <Box width={theme.spacing(28)} component='div' className='container_logo' textAlign='center' marginTop='24px'>
            <Typography variant='h1' sx={{ fontSize: '28px', fontWeight: '500' }}>
              Connect<Box component='span' color='#FF5722' fontWeight='600'>pay</Box>
            </Typography>
          </Box>
          <Box className='container_nav' component='div' flex={1} marginTop='40px'>
            <List component='nav'>
              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <SpeedRoundedIcon sx={{ color: '#414141' }} />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>
              
              <ListItemButton  onClick={DropCadastro} sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0,  }}>
                  <NoteAddOutlinedIcon sx={{ color: '#414141' }} />
                </ListItemIcon>
                <ListItemText>Cadastros</ListItemText>
                <ListItemIcon   sx={{ minWidth: 0}}>
                {dropDownCadastro ? <KeyboardArrowUpOutlinedIcon  />  : <KeyboardArrowDownRoundedIcon  /> }
                </ListItemIcon>
              </ListItemButton>

              <Collapse component='div' className='drop_cadastro' in={dropDownCadastro} timeout="auto" unmountOnExit sx={ { margin: '0px 10px',  } }>

                <ListItemText sx={{ marginLeft: '20px' }}>Clientes</ListItemText>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4, '&:hover': {backgroundColor: '#FFD8CA', borderRadius: '6px'} }}>
                    <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                      <ArrowRightOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontSize: '14px' } }} >Clientes</ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4, '&:hover': {backgroundColor: '#FFD8CA', borderRadius: '6px'} }}>
                    <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                      <ArrowRightOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontSize: '14px' } }} >Fornecedores</ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4, '&:hover': {backgroundColor: '#FFD8CA', borderRadius: '6px'} }}>
                    <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                      <ArrowRightOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontSize: '14px' } }} >Funcionários</ListItemText>
                  </ListItemButton>
                  <ListItemText sx={{ marginLeft: '20px' }}>Planos</ListItemText>
                  <ListItemButton sx={{ pl: 4, '&:hover': {backgroundColor: '#FFD8CA', borderRadius: '6px'} }}>
                    <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                      <ArrowRightOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontSize: '14px' } }} >Cadastrar Planos</ListItemText>
                  </ListItemButton>
                  <ListItemText sx={{ marginLeft: '20px' }}>Contratos</ListItemText>
                  <ListItemButton sx={{ pl: 4, '&:hover': {backgroundColor: '#FFD8CA', borderRadius: '6px'} }}>
                    <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                      <ArrowRightOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ sx: { fontSize: '14px' } }} >Cadastrar Contratos</ListItemText>
                  </ListItemButton>
                </List>

              </Collapse>

              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <PersonOutlineOutlinedIcon sx={{ color: '#414141' }} />
                </ListItemIcon>
                <ListItemText>CRM</ListItemText>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <KeyboardArrowDownRoundedIcon sx={{ color: '#414141', pl: 4 }} />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <AccountBalanceOutlinedIcon sx={{ color: '#414141' }} />
                </ListItemIcon>
                <ListItemText>Financeiro</ListItemText>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <KeyboardArrowDownRoundedIcon sx={{ color: '#414141', pl: 4 }} />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <FeedOutlinedIcon sx={{ color: '#414141' }} />
                </ListItemIcon>
                <ListItemText>Fiscal</ListItemText>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <KeyboardArrowDownRoundedIcon sx={{ color: '#414141', pl: 4 }} />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA', color: '#D6450C'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <SignalCellularAltOutlinedIcon sx={{ color: '#414141','&:hover': {color: '#D6450C'} }} />
                </ListItemIcon>
                <ListItemText>Relatórios</ListItemText>
              </ListItemButton>

              <ListItemButton sx={ {'&:hover': {backgroundColor: '#FFD8CA'}, margin: '0px 10px', borderRadius: '6px' } }>
                <ListItemIcon sx={{ color: '#414141', marginRight: '14px', minWidth: 0 }}>
                  <SettingsOutlinedIcon sx={{ color: '#414141', minWidth: 0 }} />
                </ListItemIcon>
                <ListItemText>Configurações</ListItemText>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
