export interface Shared {
}
export interface Departamento{
  id:string;
  numero:string;
  nombre:string;
  encargado:string;
  tipo:string;
}
export interface Maquina{
  id:string;
  codigo:string;
  nombre:string;
  codproceso:string;
  departamento:string;
}
export interface Parte{
  id:string;
  numero:string;
  descripcion:string;
  tipo:string;
  cliente:string;
  departamento:string
}
export interface Empleados{
  id:string;
  nombre:string;
  apellido:string;
  usuario:string;
  contrasenia:string;
  perfil:string;
  estatus:string;
}
export interface Defecto{
  id:string;
  codigomq:string;
  numerodp:string;
  numerop:string;
  tipodefecto:string;
}
export interface Registrofinal{
  id:string;
  empleado:string;
  semana:number | null;
  fecha:string;
  turno:string;
  numerodp:string;
  codigomq:string;
  numerop:string;
  pzainspc:number | null;
  pzarecha:number;
  pzaretra:number;
  totalrecha:number;
}
export interface Registrodefecto{
  id:string;
  idregistrofinal:string;
  defecto:string;
  tipo:string;
  cantidad:number;
}
export interface Valor{
  cantidad:number;
}

export interface DetallesRegistro{
  nombre_departamento:string;
  nombre_maquina:string;
  subensamble:string;
  nombre:string;
  apellido:string;
}

export interface DatosExportar {
  id: string;
  empleado: string;
  semana: number | null;
  fecha: string;
  turno: string;
  numerodp: string;
  codigomq: string;
  numerop: string;
  pzainspc: number | null;
  pzarecha: number;
  pzaretra: number;
  totalrecha: number;
  empleados: {
    //id: string;
    nombre: string;
    apellido: string;
    //usuario: string;
    //contrasenia: string;
    //perfil: string;
    //estatus: string;
  };
  departamento: {
    //id: string;
    //numero: string;
    nombre: string;
    //encargado: string;
    //tipo: string;
  };
  maquina: {
    //id: string;
    //codigo: string;
    nombre: string;
    //codproceso: string;
    //departamento: string;
  };
  parte: {
    //id: string;
    //numero: string;
    descripcion: string;
    //tipo: string;
    //cliente: string;
    //departamento: string;
  };
  registrodefecto: {
    //id: string;
    idregistrofinal: number;
    defecto: string;
    tipo: string;
    cantidad: string;
  }[];
}
export interface DefectData {
  Folio: string;
  Defecto: string;
  Tipo: string;
  Cantidad: string;
}
