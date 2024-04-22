import { v4 as uuid } from "uuid";
//generate a unique ID for each block*****

export const cleanAndTransformBlocks = (blocksJSON) => {

//each fo our blocks we need to create a recursive function but first convert the blocks Obj to JSON stringify
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

  //recursive functions run themselves and it will run its own function again  
  const assignId = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      if (!block.attributes) {
        block.attributes = {};
      }
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  console.log("IDS: ", blocks);

  return blocks;
};

