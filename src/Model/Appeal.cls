Class Model.Appeal Extends (%Library.Persistent, %JSON.Adaptor)
{

Property DateTime As %TimeStamp;

Property Package As Model.Package;

Property DenialText As %String(MAXLEN = "");

Property DenialVector As %Vector(LEN = 200);

Property Prompt As %String(MAXLEN = "");

Property Appeal As %String(MAXLEN = "");

Index IndexPackage On Package;

// Retrieve all packages associated with a company

ClassMethod GetAllAppealLetterByPackage(package) As %Library.DynamicArray
{
    set letters = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, DateTime, Package, Appeal, Prompt from Model.Appeal where Package->ID = ?")
			if ($$$ISOK(tStatus)) { 
				set tResult = tStatement.%Execute(package)
				if (tResult.%SQLCODE=0) {
					while tResult.%Next() {
                        set letter = {}
						set letter.package = tResult.Package
                        set letter.prompt = tResult.Prompt
                        set letter.appeal = tResult.Appeal
                        set letter.id = tResult.ID
                        set letter.createdDateTime = tResult.DateTime
						do letters.%Push(letter)
					}
				}
			}
            else {
                $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
            }
    return letters
}

// Retrieve all packages associated with a company

ClassMethod GetAllDenialByPackage(package) As %Library.DynamicArray
{
    set denials = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, DateTime, Package, DenialText from Model.Appeal where Package->ID = ?")
			if ($$$ISOK(tStatus)) { 
				set tResult = tStatement.%Execute(package)
				if (tResult.%SQLCODE=0) {
					while tResult.%Next() {
                        set denial = {}
						set denial.package = tResult.Package
                        set denial.denialText = tResult.DenialText
                        set denial.id = tResult.ID
                        set denial.createdDateTime = tResult.DateTime
						do denials.%Push(denial)
					}
				}
			}
            else {
                $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
            }
    return denials
}

/// Retrieve all Appeal associated with a package
ClassMethod GetAllByPackage(package) As %Status
{
    set appeals = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, DateTime, Package, DenialText, Prompt, Appeal from Model.Appeal where Package->ID = ?")
        if ($$$ISOK(tStatus)) { 
            set tResult = tStatement.%Execute(package)
            if (tResult.%SQLCODE=0) {
                while tResult.%Next() {
                    set appeal = {}
                    set appeal.id = tResult.ID
                    set appeal.package = tResult.Package
                    set appeal.denialText = tResult.DenialText
                    set appeal.prompt = tResult.Prompt
                    set appeal.appeal = tResult.Appeal
                    set appeal.createdDateTime = tResult.DateTime
                    do appeals.%Push(appeal)
                }
            }
        }

    return appeals
}

Storage Default
{
<Data name="AppealDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>DateTime</Value>
</Value>
<Value name="3">
<Value>Package</Value>
</Value>
<Value name="4">
<Value>DenialText</Value>
</Value>
<Value name="5">
<Value>DenialVector</Value>
</Value>
<Value name="6">
<Value>Prompt</Value>
</Value>
<Value name="7">
<Value>Appeal</Value>
</Value>
</Data>
<DataLocation>^Model.AppealD</DataLocation>
<DefaultData>AppealDefaultData</DefaultData>
<IdLocation>^Model.AppealD</IdLocation>
<IndexLocation>^Model.AppealI</IndexLocation>
<StreamLocation>^Model.AppealS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
