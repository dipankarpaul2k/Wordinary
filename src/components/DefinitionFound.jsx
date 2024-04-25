import React, { Fragment, useEffect, useState } from "react";
import { Card, Divider, Text } from "@mantine/core";
import useStore from "../store";
import { flattenDefinitions } from "../utils/flattenDefinitions";

function DefinitionFound() {
  const { definitions } = useStore();
  const [flattenedDefinitions, setFlattenedDefinitions] = useState([]);

  useEffect(() => {
    if (!!definitions) {
      setFlattenedDefinitions(flattenDefinitions(definitions));
    }
  }, [definitions]);

  return (
    <>
      {flattenedDefinitions &&
        flattenedDefinitions.map((def, idx) => (
          <Fragment key={idx}>
            <Divider
              labelPosition="center"
              label={
                <>
                  <Text fw={600} fz={{ base: "h5", xs: "h4" }} tt="capitalize">
                    {def.partOfSpeech}
                  </Text>
                </>
              }
            />
            <Card key={idx} shadow="sm" p="lg" withBorder my="xs">
              {/* show definitions, examples, synonyms and antonyms */}
              {def.definitions.map((d, idx) => (
                <Fragment key={idx}>
                  <Text key={`definition-${idx}`} mb="5px">
                    <strong>{`${idx + 1}.  `}</strong>
                    {d.definition}
                  </Text>
                  {d.example && (
                    <Text key={`example-${idx}`} mb="5px">
                      <strong>Example: </strong>
                      {d.example}
                    </Text>
                  )}
                  {d.synonyms.length > 0 && (
                    <Text key={`synonyms-${idx}`} mb="5px">
                      <strong>Synonyms: </strong>
                      {d.synonyms.join(", ")}
                    </Text>
                  )}
                  {d.antonyms.length > 0 && (
                    <Text key={`antonyms-${idx}`} mb="5px">
                      <strong>Antonyms: </strong>
                      {d.antonyms.join(", ")}
                    </Text>
                  )}
                </Fragment>
              ))}
            </Card>
          </Fragment>
        ))}
    </>
  );
}

export default DefinitionFound;
