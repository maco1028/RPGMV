/**
 *  Author: Maco
 *  http://cg-tutorial-spirits.blogspot.jp/
 */

/*:
*@plugindesc ver1.0 
*@
*@help
*
*/

var aliasPluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	aliasPluginCommand.call(this,command,args);

	if(command == "Test")
	{
	

	}

}