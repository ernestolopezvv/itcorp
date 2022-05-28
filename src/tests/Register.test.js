import '@testing-library/jest-dom';
import Register from '../components/Register';
import { useRef, useState, useEffect } from "react";




describe('pruebas del Registro de Usuario', () =>  {
    test('prueba en el metodo Login', () =>{

        
       

        const user = 'A00904052@itesm.mx';
        const pwd = '!aA12345';

        const submit = Register(user, pwd);

        expect(submit ).toBe('test');


    })


});