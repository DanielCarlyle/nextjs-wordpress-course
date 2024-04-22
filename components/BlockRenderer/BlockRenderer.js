import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';


export const BlockRenderer = ({ blocks = []}) => {
  return blocks.map((block) => {
    switch (block.name) {
            case 'core/heading': {
              return <Heading key={block.id} />
            }
            case "core/cover": {
                return
          (
                <Cover key={block.id} background={block.attributes.url}>
                  <BlockRenderer blocks={block.innerBlocks} />
                  </Cover>
              );
            }
            default:
                return null;
        }
      });
};