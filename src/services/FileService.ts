/**
 * Dependencies
 */
import * as fs from 'fs';
import * as path from 'path';

/**
 * 
 * @param {array} lists
 */
function flatten(lists: Array<any>) {
  return lists.reduce((a, b) => a.concat(b), []);
}

/**
 * 
 * @param {string} path 
 */
export function directoryExists(path: string) {
  if (!fs.existsSync(path)) {
    return false;
  } else {
    return true;
  }
};

/**
 * 
 * @param {string} srcpath 
 */
export function getDirectories(srcpath: string) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

/**
 * 
 * @param {string} srcpath 
 */
export function getDirectoriesRecursive(srcpath: string): Array<any> {
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}
