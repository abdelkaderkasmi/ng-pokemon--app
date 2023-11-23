drop table TAB_POKEMON;
CREATE TABLE TAB_POKEMON
(
	[Id]		numeric(18,0),
	[Name]		nvarchar(max),
	[Hp]		numeric(18,0),
	[Cp]		numeric(18,0),
	[Picture]	nvarchar(max),
	[Types]		nvarchar(max),
	[Created]	date
);

insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(1,'Bulbizarre',  25,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', 'Plante,Poison'  ,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(2,'Salamèche',   28,  6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', 'Feu'		    ,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(3,'Carapuce',    21,  4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 'Eau'			,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(4,'Aspicot',	  16,  2, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png', 'Insecte,Poison'	,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(5,'Roucool',	  30,  7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png', 'Normal,Vol'		,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(6,'Rattata',     18,  6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png', 'Normal'			,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(7,'Piafabec',	  14,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png', 'Normal,Vol'		,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(8,'Abo',         16,  4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png', 'Poison'			,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(9,'Pikachu',     21,  7, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png', 'Electrique'		,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(10,'Sablette',   19,  3, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png', 'Normal'			,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(11,'Mélofée',    25,  5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png', 'Fée'			,GETDATE()); 
insert into TAB_POKEMON (Id,Name,Hp,Cp,Picture,Types,Created) Values(12,'Groupix',    17,  8, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png', 'Feu'			,GETDATE()); 


