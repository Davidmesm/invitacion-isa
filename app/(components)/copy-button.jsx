'use state'

import { Button } from '@/components/ui/button'
import { ContentCopy } from '@mui/icons-material'
import React from 'react'

const CopyButton = ({ link }) => {

    const handleCopy = () => {

        let domain = ""

        if (typeof window !== "undefined") {
            domain = (window.location.host);
        }

        const text = `
¡Se llegó el momento! La Primera Comunión de Isabella Moreno.
Es un momento muy especial, y nos encantaría que formes parte de esta celebración.

Haz clic en el siguiente enlace para ver todos los detalles:
👉  https://${domain}${link}`;

        navigator.clipboard
          .writeText(text)
          .then(() => {
            //setCopied(true);
            //setTimeout(() => setCopied(false), 2000);
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      };

    return (
        <div>
            <Button variant="outlined" size="icon" onClick={handleCopy}>
                <ContentCopy/>
            </Button>
        </div>
    )
}

export default CopyButton