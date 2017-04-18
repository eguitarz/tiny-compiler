import Ember from 'ember';
import { 
  tokenizer,
  parser,
  transformer,
  codeGenerator,
  compiler
} from '../compiler';

export default Ember.Controller.extend({
  code: '(add "output" (add 2 (subtract 4 2)))',
  actions: {
    tokenize(code) {
      let tokens = tokenizer(code);
      this.set('tokens', tokens);
    },

    parse(tokens) {
      let ast = parser(tokens);
      this.set('ast', ast);
    },

    transform(ast) {
      let newAst = transformer(ast);
      this.set('newAst', newAst);
    },

    generate(newAst) {
      let output = codeGenerator(newAst);
      console.log('output', output)
      this.set('output', output);
    },

    compile(code) {
      let output = compiler(code);
      this.set('output', output);
    }
  }
});
