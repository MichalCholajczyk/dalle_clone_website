import FileSaver from 'file-saver'

import { surpriseMePrompts } from "../constans";

export function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() *
  surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];


  //check that we dont get 2 times same prompt in a row

  if(randomPrompt === prompt) return getRandomPrompt(prompt);
  
  return randomPrompt
}

export default async function downloadImg(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}