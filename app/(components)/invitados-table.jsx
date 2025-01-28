'use client'

import React from 'react'
import { Table, TableBody, TableHeader, TableRow, TableCell, TableHead } from "@/components/ui/table";
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import CopyButton from './copy-button';

const InvitadosTable = ({ invitados }) => {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Adultos</TableHead>
                    <TableHead>Niños</TableHead>
                    <TableHead>Link</TableHead>
                    <TableHead>Copiar Texto</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invitados.map((invitado) => {
                    console.log(invitado)
                    return (
                        <TableRow key={invitado.id}>
                            <TableCell>{invitado.id}</TableCell>
                            <TableCell>{invitado.nombre}</TableCell>
                            <TableCell>{invitado.adultos}</TableCell>
                            <TableCell>{invitado.ninos}</TableCell>
                            <TableCell>
                                <Link href={"/invitado/" + invitado.id} className={buttonVariants({ variant: "link" })}>
                                    link
                                </Link>
                            </TableCell>
                            <TableCell><CopyButton link={"/invitado/" + invitado.id} /></TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    )
}

export default InvitadosTable