import fs from 'fs';
console.log("hello")
import {promisify} from 'util';
import {resolve as r} from 'path';
import {readFile, writeFileSync as wfs} from 'fs'
import * as qs from 'querystring'


import age from './a'
console.log(age)

async function init () {
     let data = await promisify(readFile)('./package.json')
     data = JSON.parse(data)
     console.log(data.scripts)
}

init()
