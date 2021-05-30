create database nier;
use nier;

create table usuario(id int primary key auto_increment,nome varchar(100) not null unique,
email varchar(100) not null unique, senha varchar(100) not null);
select * from usuario;

create table personagens(idPersonagens int primary key, nomePersonagens varchar(2));

insert into personagens values(500,'2B'),(501,'A2'),(502,'9S');
select * from personagens;

create table slot(idSlot int primary key auto_increment, Systemchip int, Attackchip int, Defensechip int, Supportchip int, 
Hackingchip int, fkUsuario int, foreign key (fkusuario) references usuario(id), fkPersonagens int, 
foreign key (fkpersonagens) references personagens(idpersonagens))auto_increment = 1000;
select * from slot;

insert into slot values(null,10,5,2,3,0,2,500);

select usuario.nome,personagens.nomepersonagens,slot.* from slot join usuario on fkusuario = id 
join personagens on fkpersonagens = idpersonagens;

alter table usuario modify column email varchar(100) not null unique;
alter table usuario modify column nome varchar(100) not null unique;

delete from usuario where id = 1;

desc usuario;
