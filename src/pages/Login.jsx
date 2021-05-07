import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import MasterLayout from "../components/MasterLayout.jsx";

export default function Login()
{
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
   

    return(
        <MasterLayout tituloPagina="Login">
            <form>
                <TextField 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    label="Usuário:"
                    id="usuario"
                    name="usuario"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    label="Senha:"
                    id="senha"
                    name="senha"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                    Entrar
                </Button>
            </form>
        </MasterLayout>
    )
}