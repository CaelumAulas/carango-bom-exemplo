import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import { useState } from "react";
import MasterLayout from "../components/MasterLayout.jsx";

export default function CadastrarAlterarVeiculo()
{
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState("");
    const [valor, setValor] = useState("");

    return(
        <MasterLayout tituloPagina="Cadastrar / Alterar Veículo">
            <form>
                <br />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Marca</InputLabel>
                    <Select
                        name="marca"
                        id="marca"
                        autoWidth
                        label="Marca:"
                        variant="outlined"
                    >
                        <MenuItem key={1} value={1}>Marca 1</MenuItem>
                        <MenuItem key={2} value={2}>Marca 2</MenuItem>
                        <MenuItem key={3} value={3}>Marca 3</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <TextField 
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    type="text"
                    label="Modelo:"
                    id="modelo"
                    name="modelo"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField 
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    type="number"
                    label="Ano:"
                    id="ano"
                    name="ano"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField 
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    type="number"
                    label="Valor:"
                    id="valor"
                    name="valor"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                    Salvar
                </Button>
            </form>
        </MasterLayout>
    )
}