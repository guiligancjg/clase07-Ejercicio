import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

interface ProductosProps {
   nombre: string;
   descripcion: string;
   precio: number;
   sku: string;
   cantidad_disponible: number;
   url: string;
}


const Productos: React.FC<ProductosProps> = ({
   nombre,
   descripcion,
   precio,
   sku,
   cantidad_disponible,
   url
}) => {

   const [compraRealizada, setCompraRealizada] = useState(false);
   const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);


   const comprar = () => {

      setCompraRealizada(true);
      setBotonDeshabilitado(true);

   };


   return (
      <>
         <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
               <Card.Title>{nombre}</Card.Title>
               <Card.Text>
                  {descripcion}
               </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
               <ListGroup.Item>$ {precio}</ListGroup.Item>
               <ListGroup.Item>SKU: {sku}</ListGroup.Item>
               <ListGroup.Item>STOCK: {cantidad_disponible}</ListGroup.Item>
               <Button type="submit" onClick={comprar} disabled={botonDeshabilitado}>Comprar</Button>
            </ListGroup>
            {compraRealizada && (
               <Card.Body>
                  <p>¡Gracias por su compra!</p>
               </Card.Body>
            )}

         </Card>

      </>
   )
}

export default Productos;