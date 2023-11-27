drop table TAB_POKEMON;
CREATE TABLE TAB_POKEMON
(
	[Id]		numeric(18,0),
	[Name]		nvarchar(max),
	[Hp]		numeric(18,0),
	[Cp]		numeric(18,0),
	[Picture]	nvarchar(max),
	[Created]	date
);

insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(1,'Bulbizarre',  25,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(2,'Salamèche',   28,  6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(3,'Carapuce',    21,  4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(4,'Aspicot',	  16,  2, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(5,'Roucool',	  30,  7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(6,'Rattata',     18,  6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(7,'Piafabec',	  14,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(8,'Abo',         16,  4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(9,'Pikachu',     21,  7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(10,'Sablette',   19,  3, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(11,'Mélofée',    25,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png', GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Created) Values(12,'Groupix',    17,  8, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png', GETDATE()); 

drop table [dbo].[TAB_TYPE]
go

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TAB_TYPE](
	Id [numeric](18, 0) NULL,
	Name [nvarchar](max) NULL,
GO


INSERT INTO TAB_TYPE(Id,Name)	Values	(1,'Plante') 
INSERT INTO TAB_TYPE(Id,Name)	Values	(2,'Feu') 
INSERT INTO TAB_TYPE(Id,Name)	Values	(3,'Eau') 
INSERT INTO TAB_TYPE(Id,Name)	Values	(4,'Insecte')
INSERT INTO TAB_TYPE(Id,Name)	Values	(5,'Normal')
INSERT INTO TAB_TYPE(Id,Name)	Values	(6,'Electrik') 
INSERT INTO TAB_TYPE(Id,Name)	Values	(7,'Poison') 
INSERT INTO TAB_TYPE(Id,Name)	Values	(8,'Fée')
INSERT INTO TAB_TYPE(Id,Name)	Values	(9,'Vol')
INSERT INTO TAB_TYPE(Id,Name)	Values	(10,'Combat')
INSERT INTO TAB_TYPE(Id,Name)	Values	(11,'Psy')


drop table [dbo].[TAB_POKEMON_TYPE]
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TAB_POKEMON_TYPE](
	Id_POKEMON [numeric](18, 0) NULL,
	ID_TYPE [numeric](18, 0) NULL
	)
GO

insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(1,1)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(1,7)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(2,2)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(3,3)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(4,4)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(4,7)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(5,5)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(5,9)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(6,5)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(7,5)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(7,9)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(8,7)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(9,6)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(10,5)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(11,8)
insert into [TAB_POKEMON_TYPE] (Id_Pokemon,id_type) Values(12,2)
