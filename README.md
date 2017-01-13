## Constants

<dl>
<dt><a href="#makeNewGame">makeNewGame</a></dt>
<dd><p>Some of the more straightforward functions are listed here. These are standard action creators.</p>
</dd>
<dt><a href="#split">split</a></dt>
<dd><p>The split() function is a thunk. It returns a function(as opposed to an object) and this function has access
to the dispatch method. This style allows for more control, especially in async or conditional cases. Here, the split action is
immediately dispatched as is dealCardToPlayer(). But the latter has a built in time delay so I use promise-chaining to wait for 
the function to resolve prior to dealing the next card.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#dealCardToDealer">dealCardToDealer()</a></dt>
<dd><p>dealCardToDealer() and dealCardToPlayer() are very similar. They each have a &#39;meta&#39; property in their initial dispatches.
This makes the game more realistic by adding a delay between the dealing of cards. Then they pass things off to the next function to
handle everything that happens as a result of a card being dealt.</p>
</dd>
</dl>

<a name="makeNewGame"></a>

## makeNewGame
Some of the more straightforward functions are listed here. These are standard action creators.

**Kind**: global constant  
<a name="split"></a>

## split
The split() function is a thunk. It returns a function(as opposed to an object) and this function has access
to the dispatch method. This style allows for more control, especially in async or conditional cases. Here, the split action is
immediately dispatched as is dealCardToPlayer(). But the latter has a built in time delay so I use promise-chaining to wait for 
the function to resolve prior to dealing the next card.

**Kind**: global constant  
<a name="dealCardToDealer"></a>

## dealCardToDealer()
dealCardToDealer() and dealCardToPlayer() are very similar. They each have a 'meta' property in their initial dispatches.
This makes the game more realistic by adding a delay between the dealing of cards. Then they pass things off to the next function to
handle everything that happens as a result of a card being dealt.

**Kind**: global function  
