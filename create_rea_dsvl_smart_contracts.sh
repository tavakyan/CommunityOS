## declare an array variable
declare -a arr=("ReaModel" "Agent" "ExternalAgent" "InternalAgent" "Duality" "ConversionDuality" "ExchangeDuality" "DecrementConversionEvent" "IncrementConversionEvent" "DecrementExchangeEvent" "IncrementExchangeEvent" "ResourceType" "Resource" "DecrementConversionCommitment" "IncrementConversionCommitment" "DecrementExchangeCommitment" "IncrementExchangeCommitment" "ConversionReciprocity" "ExchangeReciprocity" "Commitment" "Reciprocity" "DecrementTerm" "IncrementTerm" "Term" "Contract")

## now loop through the above array
for i in "${arr[@]}"
do
   echo "$i"
   # or do whatever with individual element of the array
	truffle create:contract "$i"
	truffle create:test "$i"
done

# You can access them using echo "${arr[0]}", "${arr[1]}" also
