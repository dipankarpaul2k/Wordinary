export const flattenDefinitions = (data) => {
  return data.flatMap((word) => {
    return word.meanings.map((meaning) => {
      return {
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions.map((d) => ({
          definition: d.definition,
          example: d.example,
          synonyms: d.synonyms,
          antonyms: d.antonyms,
        })),
        phonetics: word.phonetics,
      };
    });
  });
};
